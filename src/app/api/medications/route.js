import dbConnect from "../../../config/db";
import Medication from "../../../models/Medication";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const filter = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { genericName: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const meds = await Medication.find(filter).limit(50);
    return Response.json(meds, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to fetch medications", error: String(err) },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const created = await Medication.create(body);
    return Response.json(created, { status: 201 });
  } catch (err) {
    return Response.json(
      { message: "Failed to create medication", error: String(err) },
      { status: 500 }
    );
  }
}
