import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { PaymentListPage } from './pages/PaymentList'
import { PaymentDetailsPage } from './pages/PaymentDetails'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<PaymentListPage />} />
                <Route path="/payments/:id" element={<PaymentDetailsPage />} />
            </Route>
        </Routes>
    )
}

export default App