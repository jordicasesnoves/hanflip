const BASIC_CATS = ['Numbers', 'Sino-Numbers', 'Days of the week', 'Colors'];
const HOME_BASICS_CATS = ['Home rooms', 'Kitchen', 'Living Room', 'Bedroom'];

const HomePageSection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <li className="h-28 bg-sky-200 px-3 py-2 rounded-lg">
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-dvh w-dvw select-none overflow-hidden bg-gray-100">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <main>
          <h2 className="text-2xl mb-16">Good afternoon!</h2>
          <div className="flex flex-col gap-16">
            <HomePageSection title={'Learn the basics'} items={BASIC_CATS} />
            <HomePageSection title={'Home basics'} items={HOME_BASICS_CATS} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
