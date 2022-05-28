import { Prompt, TagFilterGroupComponent } from '@lof-digital-www/shared';

export function HomePage() {
  return (
    <div>
      <Prompt title="Welcome to Lakes of Fire 2022!">
        <TagFilterGroupComponent />
      </Prompt>
    </div>
  );
}

export default HomePage;
