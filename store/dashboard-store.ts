import { create } from 'zustand';

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

const useDashboardStore = create<DashboardStoreInterface>()((set) => ({
  isCompaniesSelected: false,
  setIsCompaniesSelected: (value) =>
    set(() => ({ isCompaniesSelected: value })),

  listOfCompanies: [],
  toogleAddCompanies: (value) =>
    set((state) => {
      const list = state.listOfCompanies;
      const index = list.findIndex((listItem) => listItem.id === value.id);

      if (index !== -1) {
        list.splice(index, 1);
      } else {
        list.push(value);
      }

      return { listOfCompanies: list };
    }),
  removeAllCompanies: () => set(() => ({ listOfCompanies: [] })),
  approveCompanies: false,
  setApproveCompanies: (value) => set(() => ({ approveCompanies: value })),
}));

export default useDashboardStore;
