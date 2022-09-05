import Layout from "../../components/layout/Layout/Layout";
import PagesContainer from "../../components/layout/Layout/PagesContainer";
import Header from "../../components/Typography/Header";

export default function Customer() {
  return (
    <Layout>
      <PagesContainer maxWidth="lg">
        <Header variant="h1">Her kommer det en kundeside</Header>
      </PagesContainer>
    </Layout>
  );
}
