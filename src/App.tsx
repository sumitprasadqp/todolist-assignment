import {WuPrimaryNavbar} from '@npm-questionpro/wick-ui-lib'

export const App: React.FC = () => {
  return (
    <>
      {/* <TodoListScreen /> */}
      <WuPrimaryNavbar
        Links={[
          <a key="home" href="#" className="active">
            Home
          </a>,
          <a key="about" href="#">
            About
          </a>,
          <a key="services" href="#">
            Services
          </a>,
          <a key="contact" href="#">
            Contact
          </a>,
        ]}
      />
    </>
  )
}
