import { pharmacies, medications, inventory } from "../../../data/seed";

export async function GET(req) {
  return new Response(
    JSON.stringify({ pharmacies, medications, inventory }),
    { status: 200 }
  );
}

