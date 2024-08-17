import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Company {
  id: number;
  logo: string;
  name: string;
  link: string;
  customer: boolean;
  progress: number;
  about: string;
  info: string;
}

interface DashboardStoreInterface {
  isCompaniesSelected: boolean;
  setIsCompaniesSelected: (value: boolean) => void;
  listOfCompanies: Company[];
  toogleAddCompanies: (value: Company) => void;
  removeAllCompanies: () => void;
  approveCompanies: boolean;
  setApproveCompanies: (value: boolean) => void;
}

const useDashboardStore = create<DashboardStoreInterface>()(
  //   persist(
  (set) => ({
    isCompaniesSelected: false,
    setIsCompaniesSelected: (value) =>
      set(() => ({ isCompaniesSelected: value })),
    //   numOfSelectedCompanies: 0,
    //   setNumOfSelComps: (value) => set(() => ({ numOfSelectedCompanies: 1 })),
    listOfCompanies: [],
    toogleAddCompanies: (value) =>
      set((state) => {
        const list = state.listOfCompanies;
        const index = list.findIndex((listItem) => listItem.id === value.id);

        if (index !== -1) {
          // If the item is found, remove it from the list
          list.splice(index, 1);
        } else {
          // If the item is not found, add it to the list
          list.push(value);
        }

        // Return the updated list
        return { listOfCompanies: list };
      }),
    removeAllCompanies: () => set(() => ({ listOfCompanies: [] })),
    approveCompanies: false,
    setApproveCompanies: (value) => set(() => ({ approveCompanies: value })),
  })

  // { name: 'selected-companies' }
  //   )
);

export default useDashboardStore;
