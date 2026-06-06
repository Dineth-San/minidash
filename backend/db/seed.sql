-- ============================================================
-- MiniDash seed data
-- ------------------------------------------------------------
-- Fake, friendly, obviously-not-real starter data — 2 to 6 rows
-- per table. database.js only runs this file the very first time
-- the database is empty, so restarting the server never duplicates rows.
-- ============================================================

INSERT INTO profile (name, role, initials) VALUES
  ('Asha Perera', 'Team Lead', 'AP');

INSERT INTO greeting (period, message) VALUES
  ('morning',   'Good morning! Ready to build something small and great?'),
  ('afternoon', 'Good afternoon! Hope your day is going smoothly.'),
  ('evening',   'Good evening! Time to wrap up and ship something.'),
  ('night',     'Burning the midnight oil? Remember to get some rest!');

INSERT INTO tasks (title, status) VALUES
  ('Set up the Expo project', 'done'),
  ('Build the profile card', 'open'),
  ('Wire up the weather endpoint', 'open'),
  ('Write the project README', 'done');

INSERT INTO announcements (title, body, date) VALUES
  ('Welcome to MiniDash!', 'This is our 12-person learning project — pick your card and dive in.', '2026-06-01'),
  ('Standup moved', 'Daily standup is now at 9:30am in the usual room.', '2026-06-03'),
  ('Demo day is Friday', 'We are showing MiniDash to the wider team — bring your laptops and your cards!', '2026-06-05');

INSERT INTO weather (city, tempC, condition) VALUES
  ('Colombo', 29, 'sunny');

INSERT INTO notes (text) VALUES
  ('Pull from main before you start working each day.'),
  ('Seeing a 501 from your endpoint is normal — that means it is your turn to build it.'),
  ('Try to keep your card to about one screen tall.');

INSERT INTO members (name, role) VALUES
  ('Asha Perera', 'Team Lead'),
  ('Ben Fonseka', 'Frontend learner'),
  ('Chamodi Silva', 'Frontend learner'),
  ('Dilan Jayasuriya', 'Backend learner'),
  ('Eshani Gunaratne', 'Backend learner'),
  ('Farah Wickrama', 'Full-stack learner');

INSERT INTO links (label, url) VALUES
  ('Project board', 'https://github.com/example/minidash/projects/1'),
  ('Design mockups', 'https://www.figma.com/file/example/minidash'),
  ('Team chat', 'https://chat.example.com/minidash');

INSERT INTO activity (who, action, time) VALUES
  ('Ben', 'opened a pull request for the profile card', '09:14'),
  ('Chamodi', 'pushed 3 commits to member-3', '09:42'),
  ('Dilan', 'merged member-7 into main', '10:05'),
  ('Eshani', 'commented on the weather endpoint PR', '10:21'),
  ('Farah', 'started working on the goals card', '11:03');

INSERT INTO goals (label, percent) VALUES
  ('Backend endpoints finished', 60),
  ('Frontend cards finished', 45),
  ('Team members onboarded', 100);

INSERT INTO quotes (text, author) VALUES
  ('Code is like humor. When you have to explain it, it''s bad.', 'Cory House'),
  ('First, solve the problem. Then, write the code.', 'John Johnson'),
  ('Simplicity is the soul of efficiency.', 'Austin Freeman'),
  ('The best error message is the one that never shows up.', 'Thomas Fuchs'),
  ('Make it work, make it right, make it fast.', 'Kent Beck');
