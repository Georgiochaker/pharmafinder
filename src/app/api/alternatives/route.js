import dbConnect from "../../../config/db";
import Medication from "../../../models/Medication"; // registers model
import MedicationAlternative from "../../../models/MedicationAlternative";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const medicationId = (searchParams.get("medicationId") || "").trim();

    if (!medicationId) {
      return Response.json({ message: "medicationId is required" }, { status: 400 });
    }

    const links = await MedicationAlternative.find({ medication_id: medicationId })
      .sort({ score: -1, createdAt: -1 })
      .populate("alternative_id");

    const alternatives = links.map((l) => ({
      link_id: l._id,
      reason: l.reason,
      score: l.score,
      alternative: l.alternative_id,
    }));

    return Response.json({ medicationId, count: alternatives.length, alternatives }, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Failed to fetch alternatives", error: String(err) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { medication_id, alternative_id, reason, score } = body || {};

    if (!medication_id || !alternative_id) {
      return Response.json({ message: "medication_id and alternative_id are required" }, { status: 400 });
    }

    if (String(medication_id) === String(alternative_id)) {
      return Response.json({ message: "medication_id and alternative_id cannot be the same" }, { status: 400 });
    }

    const [m1, m2] = await Promise.all([
      Medication.findById(medication_id),
      Medication.findById(alternative_id),
    ]);

    if (!m1 || !m2) {
      return Response.json({ message: "One or both medications not found" }, { status: 404 });
    }

    const created = await MedicationAlternative.create({
      medication_id,
      alternative_id,
      reason: reason || "manual",
      score: typeof score === "number" ? score : 100,
    });

    return Response.json(created, { status: 201 });
  } catch (err) {
    if (String(err).includes("E11000")) {
      return Response.json({ message: "Alternative link already exists" }, { status: 409 });
    }
    return Response.json({ message: "Failed to create alternative link", error: String(err) }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { medication_id, alternative_id } = body || {};

    if (!medication_id || !alternative_id) {
      return Response.json({ message: "medication_id and alternative_id are required" }, { status: 400 });
    }

    const deleted = await MedicationAlternative.findOneAndDelete({ medication_id, alternative_id });

    if (!deleted) {
      return Response.json({ message: "Alternative link not found" }, { status: 404 });
    }

    return Response.json({ message: "Alternative link deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Failed to delete alternative link", error: String(err) }, { status: 500 });
  }
}
