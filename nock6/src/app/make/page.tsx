const Make = () => {
  return (
    <div>
      <form>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="begin">出発日</label>
          <input id="begin" type="date" />
          <label htmlFor="end">帰宅日</label>
          <input id="end" type="date" />
        </div>
      </form>
    </div>
  );
};

export default Make;

export const runtime = "edge";
