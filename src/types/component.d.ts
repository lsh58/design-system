namespace Component {
  // Gnb, Snb
  interface Nav {
    pathname: string;
  }
  type Page = { id: string; title: string; link: string; pages?: Page[] };
  type Category = {
    id: string;
    title: string;
    link?: string;
    pages?: Page[];
  };
}
