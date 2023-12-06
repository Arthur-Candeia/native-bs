import { StatusBar } from 'expo-status-bar';
import { StackProvider } from '@src/Providers/StackProvider';

export default function App() {
  return (
    <>
      <StackProvider />
      <StatusBar style="dark" backgroundColor='#00ee88' />
    </>
  );
}

