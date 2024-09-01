import SearchFormSection from "@/components/custom-ui/search-form-section";

type SearchPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchParamQ = searchParams.q;

  if (!searchParamQ || typeof searchParamQ !== "string")
    return (
      <SearchFormSection
        searchValue=""
        message="Termin mora imati minimalno 3 karaktera."
      />
    );

  if (searchParamQ.length < 3)
    return (
      <SearchFormSection
        searchValue={searchParamQ}
        message="Termin mora imati minimalno 3 karaktera."
      />
    );

  return (
    <SearchFormSection
      searchValue={searchParamQ}
      message={`Ukupno 5 rezultata pretrage: "${searchParamQ}"`}
    />
  );
};

export default SearchPage;
