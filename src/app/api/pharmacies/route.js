import dbConnect from "../../../config/db";
import Pharmacy from "../../../models/Pharmacy";
import Medication from "../../../models/Medication"; // register for populate

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const raw = searchParams.get("search") || "";
    const search = raw.trim();

    const filter =
      search.length > 0
        ? {
            $or: [
              { name: { $regex: search, $options: "i" } },
              { address: { $regex: search, $options: "i" } },
              { state: { $regex: search, $options: "i" } },
              { contact_number: { $regex: search, $options: "i" } },
            ],
          }
        : {};

    const pharmacies = await Pharmacy.find(filter)
      .populate("medications")
      .limit(50);

    return Response.json(
      { search, count: pharmacies.length, pharmacies },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Failed to fetch pharmacies", error: String(err) },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const created = await Pharmacy.create(body);
    return Response.json(created, { status: 201 });
  } catch (err) {
    return Response.json(
      { message: "Failed to create pharmacy", error: String(err) },
      { status: 500 }
    );
  }
}
