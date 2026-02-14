import Medication from "../../../../models/Medication";

import dbConnect from "../../../../config/db";
import Pharmacy from "../../../../models/Pharmacy";

function getId(req, params) {
  if (params?.id) return params.id;
  const pathname = new URL(req.url).pathname;
  return pathname.split("/").pop();
}

export async function GET(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);

    const pharmacy = await Pharmacy.findById(id).populate("medications");
    if (!pharmacy) {
      return Response.json({ message: "Pharmacy not found" }, { status: 404 });
    }

    return Response.json(pharmacy, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to fetch pharmacy", error: String(err) },
      { status: 500 }
    );
  }
}

export async function PATCH(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);
    const body = await req.json();

    const updated = await Pharmacy.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return Response.json({ message: "Pharmacy not found" }, { status: 404 });
    }

    return Response.json(updated, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to update pharmacy", error: String(err) },
      { status: 500 }
    );
  }
}

export async function DELETE(req, ctx) {
  try {
    await dbConnect();
    const id = getId(req, ctx?.params);

    const deleted = await Pharmacy.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json({ message: "Pharmacy not found" }, { status: 404 });
    }

    return Response.json({ message: "Pharmacy deleted" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to delete pharmacy", error: String(err) },
      { status: 500 }
    );
  }
}
