import React from "react";
import Layout from "../layout";

const Aboutus = () => {
  return (
    <div className="mt-[19vh] px-8 mb-14">
      <h2 className="text-4xl font-semibold mb-8">Về Chúng Tôi</h2>
      <h3 className="text-2xl font-semibold mt-4 my-1">Câu Chuyện</h3>
      <p className="pl-1 px-4">
        LQ-Camera là đích đến lý tưởng cho những người yêu thích nhiếp ảnh và 
        công nghệ, với một trải nghiệm mua sắm trực tuyến đầy đủ các loại máy 
        ảnh từ các thương hiệu hàng đầu trên thị trường. Với một curation kỹ 
        lưỡng của các sản phẩm chất lượng, LQ-Camera cam kết mang đến cho khách 
        hàng sự lựa chọn đa dạng, từ máy ảnh DSLR chuyên nghiệp đến máy ảnh 
        mirrorless nhỏ gọn và các phụ kiện đi kèm, đảm bảo đáp ứng mọi nhu cầu của 
        cả những nhiếp ảnh gia mới bắt đầu và những người có kinh nghiệm.
      </p>
      <h3 className="text-2xl font-semibold mt-4 my-1">Đam Mê</h3>
      <p className="pl-1 px-4">
        Với một giao diện trực quan và dễ sử dụng, LQ-Camera mang đến cho người 
        tiêu dùng một trải nghiệm mua sắm trực tuyến thuận lợi và tin cậy. 
        Từ việc tìm kiếm thông tin sản phẩm đến quy trình thanh toán an toàn 
        và giao hàng nhanh chóng, trang web của chúng tôi đặt sự tiện lợi và 
        sự hài lòng của khách hàng lên hàng đầu. Bên cạnh đó, dịch vụ hỗ trợ 
        khách hàng chuyên nghiệp và thân thiện của chúng tôi luôn sẵn sàng để
         giúp đỡ và tư vấn cho khách hàng trong mọi giai đoạn của quá trình mua sắm.
      </p>
      <h3 className="text-2xl font-semibold mt-4 my-1">Cam Kết - Chất Lượng</h3>
      <p className="pl-1 px-4">
        Với cam kết về chất lượng và uy tín, LQ-Camera là điểm đến tin cậy cho 
        những ai đang tìm kiếm một nền tảng mua sắm trực tuyến đáng tin cậy về 
        các sản phẩm liên quan đến nhiếp ảnh. Tận hưởng trải nghiệm mua sắm thú 
        vị và đáng tin cậy nhất với LQ-Camera, nơi mọi đam mê về nhiếp ảnh được 
        thỏa mãn và trải nghiệm của bạn được đặt lên hàng đầu.
      </p>
    </div>
  );
};

const About = () => {
  return <Layout children={<Aboutus />} />;
};

export default About;
