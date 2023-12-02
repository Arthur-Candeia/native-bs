import { StatusBar } from 'expo-status-bar';
import { TabProvider } from '@src/TabProvider';

export default function App() {
  return (
    <>
      <TabProvider />
      <StatusBar style="dark" backgroundColor='#00ff80' />
    </>
  );
}

