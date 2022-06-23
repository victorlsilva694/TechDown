import {} from "./styles";
import { ItensList } from "./ItensList";
import { InitialPresentation } from "../PcGamer/InitialPresentation";
import { useContext } from "react";
import { SearchContext } from "../Contexts/Search";

export const Hardware = () => {
  return (
    <>
      <InitialPresentation />
      <ItensList />
    </>
  );
};
