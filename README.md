# Hockey Schedule Generator

Create an event to add to your calendar with your team's schedule instead of the whole league's.
This allows you to block out your specific slot rather than the whole night and lets you see what time you're playing on a given night from your favourite calendar app.
It also shows you what team number you're up against, and whether you're playing as Home or Away.

The schedules will tentatively be maintained season to season.
As each season ends, the corresponding files will be removed to leave space to the new season, but they will still be available through the repo's history.

## Instructions

### Get ready-made events

All the events are already generated.
1. Navigate to the current session's folder;
1. Download your team's file;
1. Open the file on your device and follow the prompts on your app;
1. ...
1. Profit!

### Generate your own events for another league

If you're familiar with Python and Jupyter notebooks, follow the steps below.
Otherwise, feel free to drop me a message and I'll try to help.
1. Obtain the schedule information as a `.csv` file.
The file needs to contain the following columns:
    - `Date`: In the `YYYY-MM-DD` format;
    - `Game`: Number of the game — assumes format `#N` for regular games and anything else for playoff games;
    - `Time`: In the `(H)H:MMpm` format;
    - `Home`: Team name;
    - `Away`: Team name.
1. Clone the repo to your machine, or simply download the `calendar_event_generator.ipynb` notebook.
1. In the second cell, after the import, modify all the variables to your liking — everything should be rather self-explanatory.
1. Everything else should be ready to run.
Execute all cells, and the `.ics` files will appear at the path specified under `output_folder`, one file for each team found in the `.csv`.