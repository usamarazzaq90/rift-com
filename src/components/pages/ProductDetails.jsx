import Button from "../common/Button";
import Container from "../common/Container";
import Row from "../common/Row";
import Footer from "../Footer";
import TopHeader from "../Header/TopHeader";

function ProductDetails() {
  return (
    <div className="w-full bg-[#1e28320d] h-[60px]">
      <TopHeader />
      <Container className="my-[41px]">
        <Row className="justify-between">
          <Row className="w-[47%]">
            <img
              className="w-full object-cover h-[80vh]"
              src="https://images.unsplash.com/photo-1714070700742-b59b045d2dd9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Product"
            />
          </Row>
          <Row className="flex-col w-[47%]">
            <h1 className="text-[30px] text-slate-700 font-semibold mb-[70px]">
              Clothing | Demo Product
            </h1>
            <Row className="gap-[20px] mb-[10px]">
              <p className="text-[18px] text-black font-medium w-[15%]">
                Rating:
              </p>
              <p className="text-[18px] text-black ">2/5</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%]">
                Price:
              </p>
              <p className="text-[18px] text-black ">$20</p>
            </Row>
            <Row className="gap-[20px]">
              <p className="text-[18px] text-black font-medium w-[15%]">
                Category:
              </p>
              <p className="text-[18px] text-black ">Clothing</p>
            </Row>
            <Row className="gap-[20px] mt-[30px]">
              <p className="text-[18px] text-black font-medium w-[15%]">
                Description:
              </p>
              <p className="text-[18px] text-black ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tristique sagittis blandit. Quisque vitae tellus
                maximus, porttitor orci et, dapibus odio. Phasellus laoreet eros
                id metus pharetra, at ultricies lacus blandit. Curabitur sodales
                nunc tortor, ac ultrices lorem hendrerit elementum. Suspendisse
                vitae leo leo. Duis mollis lacinia nulla ut egestas. nunc.
              </p>
            </Row>
            <Row className="mt-[40px] items-center">
              <Button title="-" className="w-[52px] h-[52px]" />
              <p className="w-[70px] text-center text-[16px] font-semibold">
                0
              </p>
              <Button title="+" className="w-[52px] h-[52px]" />
            </Row>
            <Button
              title="Add to Cart"
              className="w-[174px] h-[52px] mt-[20px]"
            />
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ProductDetails;
