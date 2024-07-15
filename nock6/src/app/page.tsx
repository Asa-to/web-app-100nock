import { getRequestContext } from "@cloudflare/next-on-pages";
import { hc } from "hono/client";
import { Suspense } from "react";
import { AppType } from "src/app/api/[[...route]]/route";
import { TravelList } from "src/features/TravelList";
import { btoaForUTF8 } from "src/utils/btoaForUTF8";

const serverActin = async (formData: FormData) => {
  "use server";
  const { env } = getRequestContext<{ BASIC_USER: string }>();
  const title = formData.get("title")?.toString();
  const start = formData.get("start")?.toString();
  const end = formData.get("end")?.toString();
  // server Actionにはヘッダー情報が引き継がれないため
  const basicUser = await btoaForUTF8(env.BASIC_USER + ":");
  if (title && start && end) {
    const client = hc<AppType>("http://localhost:8788");
    await client.api.add.$post(
      { form: { title, start, end } },
      {
        headers: {
          Authorization: `Basic ${basicUser}`,
        },
      }
    );
  }
};

export default function Home() {
  return (
    <div>
      <h1>旅行メーカー</h1>
      <h2>旅行選択</h2>
      <div>
        <p>確認・編集したい旅行を選択してください！</p>
        <Suspense fallback={<>loading...</>}>
          <TravelList />
        </Suspense>
      </div>
      <div className="">
        <h2>旅行の新規作成</h2>
        <form className="flex flex-col gap-4" action={serverActin}>
          <div className="flex flex-row gap-4 items-center flex-wrap">
            <label htmlFor="title">旅行の名前を入力してね</label>
            <input name="title" id="title" required />
          </div>
          <div className="flex flex-row gap-4 items-center flex-wrap">
            <label htmlFor="start">出発日を入力してね</label>
            <input name="start" id="start" required type="date" />
          </div>
          <div className="flex flex-row gap-4 items-center flex-wrap">
            <label htmlFor="end">帰宅日を入力してね</label>
            <input name="end" id="end" required type="date" />
          </div>
          <button type="submit" className="w-fit">
            新規作成
          </button>
        </form>
      </div>
    </div>
  );
}

export const runtime = "edge";
