import { Suspense } from 'react';
import ClientHome from './client_home';
import { LoadingState } from './loader';

export default function Page() {
  return (
    <Suspense fallback={<LoadingState fullScreen={true} />}>
      <ClientHome />
    </Suspense>
  );
}