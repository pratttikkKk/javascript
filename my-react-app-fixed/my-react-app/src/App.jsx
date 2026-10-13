
import { useMemo, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  MenuItem,
  Chip,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  InputAdornment,
} from "@mui/material";

import {
  Dashboard,
  Work,
  Add,
  Search,
  Delete,
  Edit,
  BusinessCenter,
} from "@mui/icons-material";

const drawerWidth = 220;

const statuses = [
  "Applied",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

const initialApplications = [
  {
    id: 1,
    company: "Google",
    title: "Software Engineer",
    location: "Bengaluru",
    date: "2026-10-10",
    url: "https://careers.google.com/",
    status: "Interview",
  },
  {
    id: 2,
    company: "Microsoft",
    title: "Backend Developer",
    location: "Hyderabad",
    date: "2026-10-08",
    url: "https://careers.microsoft.com/",
    status: "Shortlisted",
  },
  {
    id: 3,
    company: "Infosys",
    title: "Java Developer",
    location: "Pune",
    date: "2026-10-05",
    url: "https://www.infosys.com/careers/",
    status: "Applied",
  },
];

const emptyForm = {
  company: "",
  title: "",
  location: "",
  date: new Date().toLocaleDateString("en-CA"),
  url: "",
  status: "Applied",
};

const statusColors = {
  Applied: "default",
  Shortlisted: "info",
  Interview: "warning",
  Selected: "success",
  Rejected: "error",
};

function App() {
  const [applications, setApplications] =
    useState(initialApplications);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const query = search.toLowerCase();

      const matchesSearch = [
        app.company,
        app.title,
        app.location,
      ].some((value) =>
        value.toLowerCase().includes(query)
      );

      const matchesStatus =
        filterStatus === "All" ||
        app.status === filterStatus;

      return matchesSearch && matchesStatus;
    });
  }, [applications, search, filterStatus]);

  const stats = [
    {
      label: "Total Applications",
      value: applications.length,
      color: "#1976d2",
    },
    {
      label: "Shortlisted",
      value: applications.filter(
        (a) => a.status === "Shortlisted"
      ).length,
      color: "#0288d1",
    },
    {
      label: "Interviews",
      value: applications.filter(
        (a) => a.status === "Interview"
      ).length,
      color: "#ed6c02",
    },
    {
      label: "Selected",
      value: applications.filter(
        (a) => a.status === "Selected"
      ).length,
      color: "#2e7d32",
    },
  ];

  function startAdd() {
    setEditingId(null);
    setForm({
      ...emptyForm,
      date: new Date().toLocaleDateString("en-CA"),
    });
    setError("");
    setOpen(true);
  }

  function startEdit(app) {
    setEditingId(app.id);
    setForm({
      company: app.company,
      title: app.title,
      location: app.location,
      date: app.date,
      url: app.url,
      status: app.status,
    });
    setError("");
    setOpen(true);
  }

  function saveApplication() {
    if (
      !form.company.trim() ||
      !form.title.trim() ||
      !form.location.trim() ||
      !form.date
    ) {
      setError("Please complete all required fields.");
      return;
    }

    if (
      form.url &&
      !/^https?:\/\/\S+/i.test(form.url)
    ) {
      setError("Enter a valid URL starting with http:// or https://.");
      return;
    }

    if (editingId !== null) {
      setApplications((current) =>
        current.map((app) =>
          app.id === editingId
            ? { ...form, id: editingId }
            : app
        )
      );
    } else {
      setApplications((current) => [
        { ...form, id: Date.now() },
        ...current,
      ]);
    }

    setOpen(false);
    setError("");
  }

  function deleteApplication(id) {
    const confirmed = window.confirm(
      "Delete this job application?"
    );

    if (confirmed) {
      setApplications((current) =>
        current.filter((app) => app.id !== id)
      );
    }
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f7fb" }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#fff",
          color: "#172033",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <Toolbar>
          <BusinessCenter sx={{ mr: 1.5, color: "#1976d2" }} />
          <Typography variant="h6" fontWeight={700}>
            CareerTrack
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Job Application Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            pt: 9,
            px: 2,
            borderRight: "1px solid #e5e7eb",
          },
        }}
      >
        <Stack spacing={1}>
          <Button
            startIcon={<Dashboard />}
            variant="contained"
            sx={{ justifyContent: "flex-start", py: 1.2 }}
          >
            Dashboard
          </Button>

          <Button
            startIcon={<Work />}
            sx={{
              justifyContent: "flex-start",
              py: 1.2,
              color: "text.primary",
            }}
          >
            Applications
          </Button>
        </Stack>

        <Box sx={{ mt: "auto", pb: 3 }}>
          <Typography variant="caption" color="text.secondary">
            JOB TRACKER · FRONTEND MVP
          </Typography>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: { xs: 2, md: 4 }, pt: 11, minWidth: 0 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Dashboard
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Track your job search in one place.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={startAdd}
          >
            Add Application
          </Button>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2,
            mb: 4,
          }}
        >
          {stats.map((stat) => (
            <Card
              key={stat.label}
              elevation={0}
              sx={{ border: "1px solid #e5e7eb", borderRadius: 3 }}
            >
              <CardContent>
                <Typography color="text.secondary" variant="body2">
                  {stat.label}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ color: stat.color, mt: 1 }}
                >
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={{ p: { xs: 2, md: 3 }, border: "1px solid #e5e7eb", borderRadius: 3 }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            My Applications
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <TextField
              placeholder="Search company, title, or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              fullWidth
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              select
              size="small"
              label="Filter by status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              sx={{ minWidth: { xs: "100%", md: 190 } }}
            >
              <MenuItem value="All">All statuses</MenuItem>
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company / Position</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Applied On</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id} hover>
                    <TableCell>
                      <Typography fontWeight={600}>
                        {app.company}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {app.title}
                      </Typography>
                      {app.url && (
                        <Typography
                          component="a"
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="caption"
                          sx={{ color: "primary.main" }}
                        >
                          View job posting
                        </Typography>
                      )}
                    </TableCell>

                    <TableCell>{app.location}</TableCell>
                    <TableCell>{app.date}</TableCell>

                    <TableCell>
                      <Chip
                        label={app.status}
                        color={statusColors[app.status]}
                        size="small"
                      />
                    </TableCell>

                    <TableCell align="right">
                      <IconButton
                        aria-label="Edit application"
                        color="primary"
                        onClick={() => startEdit(app)}
                      >
                        <Edit />
                      </IconButton>

                      <IconButton
                        aria-label="Delete application"
                        color="error"
                        onClick={() => deleteApplication(app.id)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                {filteredApplications.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} align="center" sx={{ py: 5 }}>
                      <Typography color="text.secondary">
                        No applications found. Try changing your search
                        or add a new application.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            {editingId !== null
              ? "Edit Application"
              : "Add Job Application"}
          </DialogTitle>

          <DialogContent>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField
                label="Company Name"
                required
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                fullWidth
              />

              <TextField
                label="Job Title"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                fullWidth
              />

              <TextField
                label="Location"
                required
                value={form.location}
                onChange={(e) =>
                  setForm({ ...form, location: e.target.value })
                }
                fullWidth
              />

              <TextField
                label="Application Date"
                type="date"
                required
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
              />

              <TextField
                label="Job URL"
                placeholder="https://..."
                value={form.url}
                onChange={(e) =>
                  setForm({ ...form, url: e.target.value })
                }
                fullWidth
              />

              <TextField
                select
                label="Application Status"
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                fullWidth
              >
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>

              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}
            </Stack>
          </DialogContent>

          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={saveApplication}>
              {editingId !== null ? "Save Changes" : "Add Application"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}

export default App;
