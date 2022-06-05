import { Prompt } from '@lof-digital-www/shared';
import {
  ArtComponent,
  CampsComponent,
  VehiclesComponent,
} from '@lof-digital-www/www-events';

export function HomePage() {
  return (
    <div>
      <Prompt title="Welcome to Lakes of Fire 2022!" />
      <ArtComponent />
      <CampsComponent />
      <VehiclesComponent />
    </div>
  );
}

export default HomePage;
