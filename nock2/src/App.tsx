import { useTetris } from "./useTetris";

const App = () => {
  const { field } = useTetris();

  return (
    <div className="bg-green-200 h-screen">
      <div className="flex flex-row w-min mx-auto">
        {field.map((row, i) => {
          return (
            <div className="flex flex-col">
              {row.map((masu, j) => {
                return (
                  <div
                    className={`w-5 h-5 bg-${masu}`}
                    id={`i: ${i}, j: ${j}`}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
