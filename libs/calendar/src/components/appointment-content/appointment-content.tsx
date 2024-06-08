import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { useRouter } from 'next/router';

import { useNavbarContext } from 'libs/shared/src/context/navbar';

export function AppointmentContentComponent({
  data,
  durationType,
  formatDate,
  recurringIconComponent,
  resources,
  type,
  children,
}: Appointments.AppointmentContentProps): JSX.Element {
  const router = useRouter();
  const { setExpanded } = useNavbarContext();
  return (
    <Appointments.AppointmentContent
      data={data}
      durationType={durationType}
      formatDate={formatDate}
      recurringIconComponent={recurringIconComponent}
      resources={resources}
      type={type}
      onClick={() => {
        router.push(`/event/${data.id}`);
        setExpanded(false);
      }}
    >
      {children}
    </Appointments.AppointmentContent>
  );
}

export default AppointmentContentComponent;
