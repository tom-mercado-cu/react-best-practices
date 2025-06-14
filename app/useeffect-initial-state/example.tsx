import { useEffect, useState } from "react";

const simulatePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 5 seconds");
    }, 5000);
  });
};

const useGetData = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      await simulatePromise();
      setData("amazing data");
    }

    getData();
  }, []);

  return data;
};

const parseData = (data: string | null) => `${data || "nothing here"} - parsed`;

// Example 1: Using useEffect for derived state (unnecessary)
export const Example1 = () => {
  const data = useGetData();
  const [parsedData, setParsedData] = useState<string | null>(null);
  console.log("re render example 1");

  useEffect(() => {
    setParsedData(parseData(data));
  }, [data]);

  return <div>{data ? parsedData : "Nothing received yet"}</div>;
};

// Example 2: Direct calculation (preferred)
export const Example2 = () => {
  const data = useGetData();
  const parsedData = parseData(data);
  console.log("re render example 2");

  return <div>{data ? parsedData : "Nothing received yet"}</div>;
};

export const AvoidUseEffectInitialState = () => {
  return (
    <div>
      <p>
        Don't forget to check the logs to see the amount of re-renders of each
        example
      </p>
      <Example1 />
      <br />
      <Example2 />
    </div>
  );
};
