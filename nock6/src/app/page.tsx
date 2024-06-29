import { TravelList } from "src/features/TravelList";

const serverActin = async (formData: FormData) => {
  "use server";
  console.log(formData.get("title"));
};

export default function Home() {
  return (
    <div>
      <h1>旅行メーカー</h1>
      <h2>旅行選択</h2>
      <div>
        <p>確認・編集したい旅行を選択してください！</p>
        <TravelList />
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
