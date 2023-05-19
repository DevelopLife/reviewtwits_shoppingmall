import {ReviewIframe, useReviewWrite} from "@review-twits/react";

const projectName = "testtest";

const ProductPage = ({productId}) => {
  const {openReviewWritePage} = useReviewWrite();

  return (
    <div>
      <ReviewIframe projectName={projectName} />
      <button onClick={() => openReviewWritePage(projectName)}>리뷰작성</button>
    </div>
  );
};

export default ProductPage;
