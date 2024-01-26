import { HomePage } from './pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PostDetailPage } from './pages/PostDetailsPage/PostDetailsPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { APP_ROUTES } from './constants/routes/routes';

const queryClient = new QueryClient();

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path={APP_ROUTES.HOME} element={<HomePage />} />
          <Route path={APP_ROUTES.POST_DETAIL} element={<PostDetailPage />} />
          <Route path={APP_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
