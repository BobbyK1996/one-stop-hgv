function CompaniesHouse({
  details: {
    companyName,
    registrationLocation,
    companyNumber,
    registeredAddress,
  },
  customCSS,
}) {
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center text-center text-xs before:w-8/12 before:min-w-10 before:-translate-y-3 before:border-2 before:border-transparent before:border-t-primary-500 before:content-[''] ${customCSS}`}
    >
      <span>Company number: {companyNumber}</span>
      <span>Registered address: {registeredAddress}</span>
    </div>
  );
}

export default CompaniesHouse;
