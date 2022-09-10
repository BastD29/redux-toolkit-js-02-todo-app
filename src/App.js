import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import { Toaster } from 'react-hot-toast';
import styles from './styles/modules/app.module.scss';

export default function App() {
  return (
    <>
      <div className='container'>
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '1.4rem'
          }
        }}
      />
    </>
  )
}
