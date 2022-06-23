import { ListComputers } from "./ListComputers";
import { InitialPresentation } from "./InitialPresentation";
import { ModelItens } from "./ModeItens";
import { BrandList } from "./BrandsList";
import { useContext } from "react";
import { SearchContext } from "../Contexts/Search";

interface ISearch {
  getterSearchCallBack: () => void;
}

export const PcGamers = () => {
  return (
    <>
      <InitialPresentation />
      <ListComputers />
      <BrandList />
      <ModelItens />
    </>
  );
};
