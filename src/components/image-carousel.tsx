import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageCarouselProps {
  images: string[];
  name: string;
  description: string;
  open?: boolean;
  onOpenChange?: () => void;
  children?: React.ReactNode;
}

export const ImageCarousel = ({
  images,
  name,
  description,
  open,
  onOpenChange,
  children,
}: ImageCarouselProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="h-full b max-h-[60%] w-full max-w-[90%] sm:max-w-[75%] md:max-h-[60%] lg:max-h-[80%]">
        <DialogHeader className="mx-auto w-full max-w-[915px] space-y-2">
          <DialogTitle className="text-xl font-semibold">
            {name} Images
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-center font-medium">
            {description}
          </DialogDescription>
        </DialogHeader>
        <Carousel className="mx-auto h-full w-full max-w-[90%] sm:max-w-[80%]">
          <CarouselContent>
            {images?.map((img) => (
              <CarouselItem key={img}>
                <div className="flex w-full items-center justify-center">
                  <img
                    src={img}
                    alt={"img-" + img}
                    className="my-auto h-[300px] w-full md:h-[500px]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary hover:bg-primary -left-9 text-white hover:text-white sm:-left-12" />
          <CarouselNext className="bg-primary hover:bg-primary -right-9 text-white hover:text-white sm:-right-12" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
