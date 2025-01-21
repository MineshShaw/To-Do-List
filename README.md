# To Do List
A simple, intuitive web-based task management application built with JavaScript, HTML, and CSS. This app allows users to create, edit, delete, filter, and prioritize tasks, all while leveraging local storage for persistent data. 

https://mineshshaw.github.io/To-Do-List/

---

## Features

- **Clock Display:** A real-time clock updates every second to show the current time.
- **Add Tasks:** Create new tasks with customizable colors and unique IDs.
- **Edit Tasks:** Toggle between editable and locked states for tasks.
- **Delete Tasks:** Easily remove tasks when they’re no longer needed.
- **Filter by Priority:** Filter tasks by their assigned priority colors.
- **Change Theme:** Toggle between light and dark themes for better usability.
- **Local Storage:** Persistent storage ensures tasks remain available across sessions.

---

## How It Works

### 1. **Clock**
Displays a digital clock in HH:MM:SS format, updated every second.

### 2. **Adding Tasks**
- Click the `Add` button to toggle the task creation modal.
- Assign a priority color and type the task details in the modal.
- Press `Shift` to save the task.

### 3. **Editing Tasks**
- Unlock tasks by clicking the lock icon. Once unlocked, you can edit the task directly.
- Relock the task to save changes, which are then synced to local storage.

### 4. **Deleting Tasks**
- Enable delete mode by clicking the trash icon (turns red in delete mode).
- Click on any task to remove it.

### 5. **Priority Filters**
- Click on priority color filters to display only tasks of the selected color.
- Click again to remove the filter.

### 6. **Theme Toggle**
Switch between light and dark themes using the theme toggle button.

### 7. **Persistent Data**
All tasks are saved in the browser’s local storage, ensuring they remain accessible even after refreshing or reopening the application.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/MineshShaw/To-Do-List
   ```
2. Navigate to the project directory:
   ```bash
   cd To-Do-List
   ```
3. Open the index.html file in your browser to start using the app.

## File Structure
```bash
.
├── index.html         # HTML structure of the app
├── styles.css         # Styling for the application
├── script.js          # Main JavaScript file containing the app logic
└── README.md          # Documentation file
```
