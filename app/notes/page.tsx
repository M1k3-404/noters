import NoteCard from "@/app/ui/homepage/note-card";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const NoteCardData = [
  {
      id: 1,
      topic: "Work Remaining",
      note: "Work remaining for the current sprint. Complete the design and start on development.",
      date: "2020-05-01",
      label: "work",
      favourite: false
  },
  {
      id: 2,
      topic: "Daily routine",
      note: "Hit The Gym, Ignite the fire, Take a shower, Check e-mails, Make a phone call, Make a tea, Take a break, Go to bed,",
      date: "2020-05-01",
      label: "personal",
      favourite: false
  },
  {
      id: 3,
      topic: "My movie list",
      note: "Top Gun: Maverick, Ford vs Ferrari, Avatar",
      date: "2020-05-01",
      label: "personal",
      favourite: true
  },
  {
      id: 4,
      topic: "Work Scribbles",
      note: "<React> this code isn't working... </React>",
      date: "2020-05-01",
      label: "work",
      favourite: false
  },
  {
      id: 5,
      topic: "Work Remaining - copy",
      note: "Work remaining for the current sprint. Complete the design and start on development.",
      date: "2020-05-01",
      label: "Work Remaining",
      favourite: true
  },
];

export default function Notes() {
  return (
    <div className="flex flex-col bg-customBlackBlue h-full w-full">
      {/* Greeting Text */}
      <div>
        <p className="text-5xl md:ml-12 mt-12">Good Morning!</p>
        <p className="text-lg md:ml-12 md:mt-2">Saturday, January 14, 2024</p>
      </div>

      {/* Content */}
      <div className="md:mt-20 w-full bg-transparent">
        <Tabs variant="underlined" className="flex w-1/2 flex-col tab-key">
          {/* Notes Tab */}
          <Tab key="1" title="Notes" className="text-xl">
            <div className="h-full w-full grid grid-cols-4 gap-4 md:mt-6 px-4">
              {NoteCardData.map((card) => (
                <NoteCard key={card.id} {...card} />
              ))}
            </div>
          </Tab>

          {/* Favourites Tab */}
          <Tab key="2" title="Favourites" className="text-xl">
            <div className="h-full w-full grid grid-cols-4 gap-4 md:mt-6 px-4">
              {NoteCardData.map((card) => {
                if (card.favourite) {
                  return <NoteCard key={card.id} {...card} />
                }
              })}
            </div>
          </Tab>
        </Tabs>

          {/* Functions */}
          {/* <div className="flex w-48 items-center justify-between">
            <button className="flex-auto md:mx-3 md:p-4 text-white bg-transparent custom-btn">
              <SortIcon sx={{ fontSize: 32 }} />
            </button>
            <button className="flex-auto md:mx-3 md:p-4 text-white bg-transparent custom-btn">
              <GridViewIcon sx={{ fontSize: 32 }} />
            </button>
          </div> */}
      </div>
    </div>
  )
}
