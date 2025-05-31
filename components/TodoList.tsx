"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { Calendar1Icon } from "lucide-react"
import { Button } from "./ui/button"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>
          {/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>{/* LIST ITEM */}
          <Card className="p-4">
            <div className="flex items-center gap-4 px-2">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList