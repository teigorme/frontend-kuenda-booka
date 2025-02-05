import Card from "./(components)/card";

function Page() {
  return (
    <div>
      <div className="grid-flow-row grid-cols-1 gap-2 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Page;
