import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const SUBSCRIBERS_FILE = path.join(process.cwd(), "data", "subscribers.json");

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    let subscribers: string[] = [];

    try {
      const data = await fs.readFile(SUBSCRIBERS_FILE, "utf-8");
      subscribers = JSON.parse(data);
    } catch {
      // 檔案不存在時，由後續流程建立
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: "Already subscribed" });
    }

    subscribers.push(email);
    await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({ message: "Subscribed" });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
