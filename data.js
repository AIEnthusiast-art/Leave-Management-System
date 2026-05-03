// ── Shared Leave Management Data Layer ──────────────────────────────────────

const STORAGE_KEY = 'lms_leaves';

const SEED_DATA = [
  { id: 'L001', empId: 'EMP101', empName: 'Ayesha Khan',      dept: 'Engineering',   type: 'Casual',  from: '2025-04-01', to: '2025-04-02', reason: 'Personal work',        status: 'Approved',  deptApproved: true },
  { id: 'L002', empId: 'EMP102', empName: 'Bilal Ahmed',      dept: 'Marketing',     type: 'Sick',    from: '2025-04-05', to: '2025-04-06', reason: 'Fever and flu',         status: 'Approved',  deptApproved: true },
  { id: 'L003', empId: 'EMP103', empName: 'Sara Malik',       dept: 'HR',            type: 'Annual',  from: '2025-04-10', to: '2025-04-14', reason: 'Family vacation',       status: 'Rejected',  deptApproved: false },
  { id: 'L004', empId: 'EMP104', empName: 'Usman Tariq',      dept: 'Engineering',   type: 'Sick',    from: '2025-04-18', to: '2025-04-18', reason: 'Doctor appointment',    status: 'Pending',   deptApproved: false },
  { id: 'L005', empId: 'EMP105', empName: 'Nadia Hussain',    dept: 'Finance',       type: 'Casual',  from: '2025-05-02', to: '2025-05-02', reason: 'Bank errand',          status: 'Pending',   deptApproved: false },
  { id: 'L006', empId: 'EMP106', empName: 'Hamza Riaz',       dept: 'Engineering',   type: 'Annual',  from: '2025-05-05', to: '2025-05-09', reason: 'Home renovation',       status: 'Approved',  deptApproved: true },
  { id: 'L007', empId: 'EMP107', empName: 'Fatima Zafar',     dept: 'Marketing',     type: 'Sick',    from: '2025-05-12', to: '2025-05-13', reason: 'Migraine',             status: 'Pending',   deptApproved: false },
  { id: 'L008', empId: 'EMP108', empName: 'Ali Hassan',       dept: 'Finance',       type: 'Casual',  from: '2025-05-15', to: '2025-05-15', reason: 'Urgent work',          status: 'Approved',  deptApproved: true },
  { id: 'L009', empId: 'EMP109', empName: 'Zara Qureshi',     dept: 'HR',            type: 'Annual',  from: '2025-05-20', to: '2025-05-23', reason: 'Siblings wedding',     status: 'Pending',   deptApproved: true },
  { id: 'L010', empId: 'EMP110', empName: 'Omar Bashir',      dept: 'Engineering',   type: 'Casual',  from: '2025-06-01', to: '2025-06-01', reason: 'Religious holiday',    status: 'Approved',  deptApproved: true },
  { id: 'L011', empId: 'EMP111', empName: 'Mehwish Iqbal',    dept: 'Marketing',     type: 'Annual',  from: '2025-06-10', to: '2025-06-14', reason: 'Travel abroad',        status: 'Pending',   deptApproved: false },
  { id: 'L012', empId: 'EMP112', empName: 'Junaid Siddiqui',  dept: 'Finance',       type: 'Sick',    from: '2025-06-18', to: '2025-06-19', reason: 'Back pain',            status: 'Rejected',  deptApproved: false },
];

function initData() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
  }
}

function getLeaves() {
  initData();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveLeaves(leaves) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leaves));
}

function addLeave(leave) {
  const leaves = getLeaves();
  const id = 'L' + String(leaves.length + 1).padStart(3, '0');
  leaves.push({ ...leave, id, status: 'Pending', deptApproved: false });
  saveLeaves(leaves);
}

function updateLeaveStatus(id, status, deptApproved) {
  const leaves = getLeaves();
  const idx = leaves.findIndex(l => l.id === id);
  if (idx !== -1) {
    leaves[idx].status = status;
    if (deptApproved !== undefined) leaves[idx].deptApproved = deptApproved;
    saveLeaves(leaves);
  }
}

function getStats() {
  const leaves = getLeaves();
  return {
    total: 112,
    applied: leaves.length,
    pending: leaves.filter(l => l.status === 'Pending').length,
    approved: leaves.filter(l => l.status === 'Approved').length,
    rejected: leaves.filter(l => l.status === 'Rejected').length,
  };
}

function getLeavesPerMonth() {
  const leaves = getLeaves();
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const counts = new Array(12).fill(0);
  leaves.forEach(l => {
    const m = new Date(l.from).getMonth();
    counts[m]++;
  });
  return { labels: months, data: counts };
}

function getLeaveTypeDistribution() {
  const leaves = getLeaves();
  const types = { Casual: 0, Sick: 0, Annual: 0 };
  leaves.forEach(l => { if (types[l.type] !== undefined) types[l.type]++; });
  return types;
}

function resetData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_DATA));
}
