import regionsApiMOCK from "@/data/mocks/regionsApiMOCK";

const ContactsPage = () => {
  return <div>Contacts Page</div>;
};

export default ContactsPage;

export async function generateStaticParams() {
  // const allRegionsData = await getAllRegions();
  const allRegionsData = regionsApiMOCK;
  const subdomains = Object.values(allRegionsData)
    .map((region) => region.subdomain)
    .filter((region) => region !== "" && region !== "/");

  return subdomains.map((subdomain) => ({
    subdomain,
  }));
}
