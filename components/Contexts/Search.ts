import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";

class SearchStore {
  constructor() {
    makeAutoObservable(this);
  }

  public search = {
    search: "",
    isActive: false
  };


  
  public async setterSearch(search: string) {
    runInAction(() => {
      this.search.search = search;
      this.search.isActive = true;
    });
  }
}

export const Search = new SearchStore();
export const SearchContext = createContext(Search);
export const SearchProvider = SearchContext.Provider;