import dbConnect from "../../../../config/db";
import Medication from "../../../../models/Medication";

function getId(req, params) {
  // Prefer Next params, fallback to URL parsing
  if (params?.id) return params.id;
  const pathname = new URL(req.url).pathname; // /api/medications/<id>
  return pathname.split("/").pop();
}

export async function GET(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);

    const med = await Medication.findById(id);
    if (!med) return Response.json({ message: "Medication not found" }, { status: 404 });

    return Response.json(med, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Failed to fetch medication", error: String(err) }, { status: 500 });
  }
}

export async function PATCH(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);
    const body = await req.json();

    const updated = await Medication.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updated) return Response.json({ message: "Medication not found" }, { status: 404 });

    return Response.json(updated, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Failed to update medication", error: String(err) }, { status: 500 });
  }
}

export async function DELETE(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);

    const deleted = await Medication.findByIdAndDelete(id);
    if (!deleted) return Response.json({ message: "Medication not found" }, { status: 404 });

    return Response.json({ message: "Medication deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Failed to delete medication", error: String(err) }, { status: 500 });
  }
}
