import { Button } from "@/components/ui/button";

export default function ButtonStyle() {
  return (
    <>
      <div className="flex gap-4">
        <Button theme="primary" variant="iconText">
          <span className="icon-download"></span> Learn More
        </Button>
        <Button theme="secondary" variant="iconText">
          Learn More <span className="icon-filter"></span>
        </Button>
      </div>
      <div className="flex gap-4">
        <Button theme="primary" variant="icon">
          <span className="icon-saved-cart"></span>
        </Button>
        <Button theme="secondary" variant="icon">
          <span className="icon-cart"></span>
        </Button>
        <Button theme="tertiary" variant="icon">
          <span className="icon-certification"></span>
        </Button>
        <Button theme="disabled" variant="icon">
          <span className="icon-chevron-right"></span>
        </Button>
      </div>
    </>
  );
}
