namespace Component {
  // Gnb, Snb
  type Page = {
    id: string;
    title: string;
    link: string;
    pages?: Page[];
    path?: string[];
  };
}
