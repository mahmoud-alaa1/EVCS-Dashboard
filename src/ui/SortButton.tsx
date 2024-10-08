import React, { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import UnselectedSort from "./UnselectedSort";
import Button from "./Button";
import HightToLowSort from "./HightToLowSort";
import LowToHightSort from "./LowToHightSort";

//default->high->low repeat

function reducer(state: string) {
  switch (state) {
    case "default":
      return "high";
    case "high":
      return "low";
    case "low":
      return "default";
    default:
      return state;
  }
}

export default function SortButton({ children }: { children?: string }) {
  const [state, dispatch] = useReducer(reducer, "default");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set(`sort`, state);
    setSearchParams(searchParams);
  }, [state,searchParams,setSearchParams,children]);

  return (
    <Button  type="button" className="gap-1" onClick={dispatch}>
      {children}
      {state === "default" ? (
        <UnselectedSort />
      ) : state === "high" ? (
        <HightToLowSort />
      ) : (
        <LowToHightSort />
      )}
    </Button>
  );
}
