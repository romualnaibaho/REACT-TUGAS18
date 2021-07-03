import React, { Component } from "react";
import { Slide, Caption, Slider, Card, Icon, CardTitle, Col, Row, SideNav, SideNavItem, Button } from 'materialize-css';

class App extends Component {

  render(){
    return (
      <div>
        <div style={{zIndex: "99999"}}>
          <SideNav
            id="SideNav-10"
            options={{
              draggable: true
            }}
            trigger={<Button node="button"><i class="material-icons">view-list</i></Button>}
          >
            <SideNavItem
              user={{
                background: 'https://placeimg.com/640/480/tech',
                email: 'test@gmail.com',
                image: 'static/media/react-materialize-logo.824c6ea3.svg',
                name: 'Satria Darmawan'
              }}
              userView
            />
            <SideNavItem
              href="#"
              icon={<Icon>person</Icon>}
            >
              Profil Saya
            </SideNavItem>
            <SideNavItem
              href="#"
              icon={<Icon>help</Icon>}
            >
              Hubungi Kami
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>
              Product
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Kesehatan
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Komputer & Aksesoris
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Gaming
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Kamera
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Olahraga
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Fashion Pria
            </SideNavItem>
            <SideNavItem
              href="#"
              waves
            >
              Fashion Wanita
            </SideNavItem>
          </SideNav>
        </div>

        <Slider
          fullscreen={false}
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}
        >
          <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
            <Caption placement="center">
              <h3>
                This is our big Tagline!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="left">
              <h3>
                Left Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="right">
              <h3>
                Right Aligned Caption
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>

          <p>Hot List</p>
        <Row>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Audio</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Audio Technica - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 910 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Handphone</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Handphone Samsung - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 200 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Sequishy</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Sequishy - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 5,5 rb</span>
            </Card>
          </Col>
          <Col
            className="teal white-text"
            s={3}
          >
            <Card
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="">Koleksi The Avenger</CardTitle>}
              revealIcon={<Icon>more_vert</Icon>}
            >
              Koleksi The Avenger - Mulai Dari <span style={{backgroundColor: "red"}}>Rp 5,5 rb</span>
            </Card>
          </Col>
        </Row>
        <Pagination
          activePage={2}
          items={8}
          leftBtn={<Icon>chevron_left</Icon>}
          rightBtn={<Icon>chevron_right</Icon>}
        />
      </div>
    );
  }
}

export default App;
