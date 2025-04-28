import waitFor from "@/lib/helper/waitFor";

export const handleTicketSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const ticket: Ticket = {
    id: Math.random().toString(36).substr(2, 9),
    subject: newTicket.subject,
    description: newTicket.description,
    status: 'open',
    createdAt: new Date().toISOString(),
    attachments: attachments,
  };
  setTickets([...tickets, ticket]);
  setNewTicket({ subject: '', description: '' });
  setAttachments([]);
  setShowTicketForm(false);
};

export function GetTickets(){
  waitFor(3000);
  const tickets=[{
    id: "newt1",
    subject: "This is the First Ticket",
    description: "something here",
    status: 'open',
    createdAt: "25-02-2025"}]
  return tickets
}