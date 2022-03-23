import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import DashBoardRoutes from '../../routers/DashBoardRoutes';


describe('Pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Juanito'
        }
    }

    test('debe de mostrarse correctamente - Marvel', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito');
        expect(wrapper.find('h1').text().trim()).toBe("Marvel's Hero");

    })

    test('debe de mostrarse correctamente de DC', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashBoardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe("Dc's Hero");
    })
})
