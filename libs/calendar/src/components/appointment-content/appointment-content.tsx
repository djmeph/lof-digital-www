import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { useRouter } from 'next/router';

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
  return (
    <Appointments.AppointmentContent
      data={data}
      durationType={durationType}
      formatDate={formatDate}
      recurringIconComponent={recurringIconComponent}
      resources={resources}
      type={type}
      onClick={() => router.push(`/event/${data.id}`)}
    >
      {children}
    </Appointments.AppointmentContent>
  );
}

export default AppointmentContentComponent;
