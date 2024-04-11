/* eslint-disable react/no-unescaped-entities */
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="grid md:grid-cols-2 items-start max-w-6xl gap-6 lg:gap-12 px-4 mx-auto">
        <div className="grid gap-4 md:gap-8 items-start">
          <div className="flex md:hidden items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl">Galaxy S22 Ultra</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto">$1299</div>
          </div>
          <div className="hidden md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl">Galaxy S22 Ultra</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold ml-auto">$1299</div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="color">
                Color
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="phantom-black" id="color">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-phantom-black"
                >
                  <RadioGroupItem id="color-phantom-black" value="phantom-black" />
                  Phantom Black
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-phantom-white"
                >
                  <RadioGroupItem id="color-phantom-white" value="phantom-white" />
                  Phantom White
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-burgundy-red"
                >
                  <RadioGroupItem id="color-burgundy-red" value="burgundy-red" />
                  Burgundy Red
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="256gb" id="size">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-128gb"
                >
                  <RadioGroupItem id="size-128gb" value="128gb" />
                  128GB{"\n                            "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-256gb"
                >
                  <RadioGroupItem id="size-256gb" value="256gb" />
                  256GB{"\n                            "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-512gb"
                >
                  <RadioGroupItem id="size-512gb" value="512gb" />
                  512GB{"\n                            "}
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="quantity">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg">Add to cart</Button>
          </form>
          <Separator className="border-gray-200 dark:border-gray-800" />
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              Introducing the Galaxy S22 Ultra, the pinnacle of smartphone innovation. This extraordinary device is
              designed to elevate your mobile experience, offering a perfect combination of style, performance, and
              cutting-edge technology.
            </p>
            <p>
              The Galaxy S22 Ultra features a stunning 6.8-inch Dynamic AMOLED display, providing crisp and vibrant
              visuals for all your content. Whether you're streaming videos, playing games, or browsing the web, you'll
              enjoy an immersive viewing experience with incredible detail and true-to-life colors.
            </p>
            <p>
              Under the hood, the Galaxy S22 Ultra is powered by the latest Exynos 2200 processor, delivering seamless
              performance and multitasking capabilities. With 12GB of RAM, you can switch between apps with ease, while
              the 5,000mAh battery ensures long-lasting power to keep up with your busy day.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:gap-8 items-start">
          <div className="grid gap-4 md:gap-8">
            <img
              alt="Product Image"
              className="aspect-video overflow-hidden object-cover rounded-lg border border-gray-200 w-full dark:border-gray-800"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
          </div>
          <div className="grid gap-4">
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-square object-cover"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid max-w-6xl gap-6 lg:gap-12 px-4 mx-auto">
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">Technical Specifications</h2>
          <div className="grid gap-2 text-sm leading-none md:grid-cols-2">
            <dl className="grid grid-cols-2">
              <dt>Processor</dt>
              <dd>Exynos 2200</dd>
              <dt>RAM</dt>
              <dd>12GB</dd>
              <dt>Storage</dt>
              <dd>256GB / 512GB</dd>
              <dt>Display</dt>
              <dd>6.8-inch Dynamic AMOLED 2X</dd>
              <dt>Battery</dt>
              <dd>5,000mAh</dd>
            </dl>
            <dl className="grid grid-cols-2">
              <dt>Rear Camera</dt>
              <dd>
                108MP Wide
                <br />
                12MP Ultra-Wide
                <br />
                10MP Telephoto
              </dd>
              <dt>Front Camera</dt>
              <dd>40MP</dd>
              <dt>Operating System</dt>
              <dd>One UI 5.1 (Android 12)</dd>
              <dt>5G Connectivity</dt>
              <dd>Sub-6 / mmWave</dd>
              <dt>Security</dt>
              <dd>Ultrasonic under-display fingerprint sensor</dd>
            </dl>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <div className="flex items-start gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-semibold">Excellent device</h3>
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="text-sm text-muted">Posted 2 days ago by JohnDoe</p>
            </div>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                I've been using the Galaxy S22 Ultra for a few weeks now, and I'm incredibly impressed with the
                performance and features of this device. The camera quality is outstanding, allowing me to capture
                stunning photos and videos in any lighting conditions.
              </p>
              <p>
                The battery life is excellent, easily lasting me through a full day of heavy usage. The display is
                gorgeous, delivering vibrant colors and sharp details for an immersive viewing experience.
              </p>
              <p>
                The device feels premium and well-built, and I appreciate the additional features such as the S Pen
                support and the enhanced multitasking capabilities. Overall, I highly recommend the Galaxy S22 Ultra to
                anyone looking for a top-of-the-line smartphone with powerful performance and advanced features.
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex items-start gap-4">
            <div className="grid gap-1">
              <h3 className="text-base font-semibold">Disappointing experience</h3>
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="text-sm text-muted">Posted 1 day ago by JaneSmith</p>
            </div>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                I was really looking forward to using the Galaxy S22 Ultra, but unfortunately, my experience with the
                device has been quite disappointing. I've encountered several issues with the performance and software,
                including frequent lag and stuttering when using the device.
              </p>
              <p>
                The camera quality is the only aspect of the device that I find impressive, as it can capture
                high-quality images. However, the battery life is not as long as I expected, and I often find myself
                needing to recharge the device multiple times throughout the day.
              </p>
              <p>
                I've also had issues with the fingerprint sensor, which seems to be unreliable and often fails to
                recognize my fingerprint. Overall, I'm quite disappointed with my experience with the Galaxy S22 Ultra,
                and I'm considering returning the device.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Write a Review</h3>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="review-title">
                  Review Title
                </Label>
                <Input id="review-title" required />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="review">
                  Your Review
                </Label>
                <Textarea className="min-h-[100px]" id="review" required />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="name">
                  Your Name
                </Label>
                <Input id="name" required />
              </div>
              <Button>Submit Review</Button>
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Rate the Product</h3>
              <div className="flex items-center gap-2">
                <Label className="sr-only not-allowed [&:has(:focus)]:not-allowed" htmlFor="review-star-1">
                  1 Star
                </Label>
                <Checkbox className="not-allowed" disabled id="review-star-1" />
                <Label className="sr-only not-allowed [&:has(:focus)]:not-allowed" htmlFor="review-star-2">
                  2 Star
                </Label>
                <Checkbox className="not-allowed" disabled id="review-star-2" />
                <Label className="sr-only not-allowed [&:has(:focus)]:not-allowed" htmlFor="review-star-3">
                  3 Star
                </Label>
                <Checkbox className="not-allowed" disabled id="review-star-3" />
                <Label className="sr-only not-allowed [&:has(:focus)]:not-allowed" htmlFor="review-star-4">
                  4 Star
                </Label>
                <Checkbox className="not-allowed" disabled id="review-star-4" />
                <Label className="sr-only not-allowed [&:has(:focus)]:not-allowed" htmlFor="review-star-5">
                  5 Star
                </Label>
                <Checkbox className="not-allowed" disabled id="review-star-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}