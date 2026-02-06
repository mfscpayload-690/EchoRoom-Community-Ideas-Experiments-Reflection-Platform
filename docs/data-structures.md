# EchoRoom Data Structures

This document defines the data fields for Experiments and Reflections in the EchoRoom platform.

These structures represent what information should be captured at each stage of the learning loop.

---

## 📊 Experiment Data Structure

An **Experiment** represents a time-bound test of an approved idea. It tracks the setup, execution, and results of trying something new.

### Core Fields

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `id` | String (UUID) | Unique identifier for the experiment | `"exp_a1b2c3d4"` |
| `idea_id` | String (UUID) | Reference to the original idea that spawned this experiment | `"idea_xyz123"` |
| `title` | String | Clear, concise name of the experiment | `"Weekly Data Structures Study Groups"` |
| `description` | Text | Detailed explanation of what will be tested and how | `"Run weekly 2-hour study sessions every Saturday..."` |
| `hypothesis` | Text | What outcome is expected and why | `"Weekly study groups will improve student understanding and reduce dropout rates by 20%"` |
| `status` | Enum | Current state of the experiment | `"planning"`, `"active"`, `"completed"`, `"cancelled"` |

### Timeline Fields

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `start_date` | Date | When the experiment begins | `"2026-02-01"` |
| `end_date` | Date | When the experiment ends | `"2026-02-28"` |
| `duration` | Integer | Length of experiment in days | `28` |
| `created_at` | Timestamp | When this experiment was created | `"2026-01-25T10:30:00Z"` |
| `updated_at` | Timestamp | Last time this experiment was modified | `"2026-02-15T14:22:00Z"` |

### People & Resources

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `created_by` | String (User ID) | Who proposed/created this experiment | `"user_john123"` |
| `responsible_team` | Array of User IDs | People running the experiment | `["user_alice", "user_bob"]` |
| `participants` | Array of User IDs | People participating in the experiment | `["user_carol", "user_dave", ...]` |
| `required_resources` | Array of Strings | What's needed to run this experiment | `["Classroom 301", "2 volunteer mentors", "Study materials"]` |

### Success Metrics

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `success_criteria` | Array of Objects | Measurable goals and targets | See below |
| `metrics_tracked` | Array of Strings | What data will be collected | `["attendance", "quiz_scores", "satisfaction_rating"]` |

**Success Criteria Object Structure:**
```
{
  metric: "attendance",
  target: "10+ students per session",
  measurement: "weekly count"
}
```

### Progress Tracking

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `progress_updates` | Array of Objects | Weekly/regular check-ins during the experiment | See below |
| `data_collected` | Array of Objects | Raw data gathered during the experiment | See below |

**Progress Update Object:**
```
{
  date: "2026-02-08",
  week: 2,
  notes: "Max capacity reached, positive energy",
  attendance: 15,
  issues: "Room getting too small"
}
```

**Data Collected Object:**
```
{
  date: "2026-02-08",
  metric: "quiz_score",
  value: 7.1,
  context: "Average score out of 10"
}
```

### Documentation

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `documentation_url` | String (URL) | Link to detailed experiment plan/notes | `"https://docs.echoroom.example/exp/123"` |
| `tags` | Array of Strings | Categorization tags | `["education", "peer-learning", "community"]` |
| `visibility` | Enum | Who can see this experiment | `"public"`, `"members_only"`, `"private"` |

### Outcome Summary (filled when experiment completes)

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `outcome_status` | Enum | Overall result | `"success"`, `"failure"`, `"mixed"`, `"inconclusive"` |
| `results_summary` | Text | Brief overview of what happened | `"Study groups improved quiz scores by 35% with 4.3/5 satisfaction..."` |
| `reflection_id` | String (UUID) | Link to the reflection document | `"refl_xyz789"` |

---

## 🧠 Reflection Data Structure

A **Reflection** documents what was learned from an experiment. It captures insights, challenges, and recommendations for the future.

### Core Fields

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `id` | String (UUID) | Unique identifier for the reflection | `"refl_xyz789"` |
| `experiment_id` | String (UUID) | Reference to the experiment being reflected upon | `"exp_a1b2c3d4"` |
| `title` | String | Clear title for the reflection | `"Study Groups Reflection: Success with Scaling Challenges"` |
| `summary` | Text | High-level overview of learnings | `"The study groups significantly improved learning outcomes but faced mentor availability issues..."` |
| `created_at` | Timestamp | When this reflection was written | `"2026-03-05T16:45:00Z"` |
| `updated_at` | Timestamp | Last modification time | `"2026-03-06T09:15:00Z"` |

### Authorship

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `author_id` | String (User ID) | Primary author of the reflection | `"user_alice"` |
| `contributors` | Array of User IDs | Others who contributed to the reflection | `["user_bob", "user_charlie"]` |
| `review_status` | Enum | Whether reflection has been reviewed | `"draft"`, `"reviewed"`, `"published"` |

### Analysis Sections

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `what_worked` | Array of Strings | Things that went well | `["Small group size allowed personalized help", "Saturday timing worked well"]` |
| `what_didnt_work` | Array of Strings | Challenges faced | `["Hard to find consistent mentors", "Room was too small"]` |
| `surprises` | Array of Strings | Unexpected discoveries | `["Students formed their own study groups outside sessions"]` |
| `root_causes` | Text | Why things worked or didn't work | `"Mentor availability issues stemmed from lack of incentives and unclear time commitment..."` |

### Outcomes & Evidence

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `results_achieved` | Array of Objects | What metrics showed | See below |
| `qualitative_feedback` | Text | Stories, quotes, observations | `"Students reported feeling more confident. One said: 'I finally understand recursion!'"` |
| `supporting_data` | Array of URLs | Links to charts, spreadsheets, photos | `["https://data.example/charts/attendance.png"]` |

**Results Achieved Object:**
```
{
  metric: "quiz_scores",
  target: "+20% improvement",
  actual: "+35% improvement",
  status: "exceeded"
}
```

### Insights & Learnings

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `key_learnings` | Array of Strings | Most important takeaways | `["Peer teaching is more effective than lectures for this topic"]` |
| `answered_questions` | Array of Objects | Questions the experiment was meant to answer | See below |
| `new_questions` | Array of Strings | New questions raised by this experiment | `["Would online sessions work as well?", "Can we scale to other subjects?"]` |

**Answered Questions Object:**
```
{
  question: "Do study groups improve retention?",
  answer: "Yes, dropout rate decreased by 15%",
  confidence: "high"
}
```

### Recommendations

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `should_continue` | Boolean | Whether to continue this program | `true` |
| `improvements` | Array of Strings | Suggestions for next time | `["Create mentor rotation schedule", "Book larger room"]` |
| `scaling_considerations` | Text | Thoughts on making this bigger | `"Can expand to other subjects, but need mentor recruitment strategy first"` |
| `related_ideas` | Array of Strings | New ideas spawned from this reflection | `["Monthly mentor training workshops", "Student-led tutoring program"]` |

### Community Impact

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `benefited_count` | Integer | How many people benefited | `52` (students who attended) |
| `community_sentiment` | Enum | How the community feels about the outcome | `"positive"`, `"neutral"`, `"mixed"`, `"negative"` |
| `follow_up_actions` | Array of Objects | What happens next | See below |

**Follow-up Action Object:**
```
{
  action: "Make study groups permanent",
  assigned_to: "user_alice",
  deadline: "2026-03-15",
  status: "in_progress"
}
```

### Documentation & Sharing

| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `full_report_url` | String (URL) | Link to detailed reflection document | `"https://docs.echoroom.example/reflections/789"` |
| `tags` | Array of Strings | Categorization tags | `["education", "success", "scaling-challenges"]` |
| `visibility` | Enum | Who can view this reflection | `"public"`, `"members_only"`, `"private"` |
| `shared_publicly` | Boolean | Whether shared outside the platform | `true` |

---

## 🔗 Relationship Between Structures

### Data Flow
```
Idea (not in this doc)
    ↓
Experiment (captures the test)
    ↓
Reflection (captures the learning)
    ↓
Shared Knowledge (informs future Ideas)
```

### Key Relationships

1. **Experiment → Idea**: Each experiment references its source idea via `idea_id`
2. **Reflection → Experiment**: Each reflection references its experiment via `experiment_id`
3. **Users**: Both structures track who created, participated, and contributed
4. **Timeline**: Both track creation and update timestamps for history

### Example Connection
```
Idea #42: "Weekly Study Groups"
    ↓
Experiment #123 (idea_id: "42")
    • Start: Feb 1
    • End: Feb 28
    • Status: completed
    • Outcome: success
    ↓
Reflection #789 (experiment_id: "123")
    • What worked: peer teaching, small groups
    • What didn't: mentor availability
    • Recommendation: continue with improvements
```

---

## 📝 Implementation Notes

### Optional Fields

While all fields above are useful, implementations may start with a minimal set:

**Minimal Experiment:**
- id, title, description, start_date, end_date, status, created_by

**Minimal Reflection:**
- id, experiment_id, title, summary, what_worked, what_didnt_work, key_learnings

### Extensibility

These structures are designed to be extended with:
- Custom fields per community
- Integration with external tools (calendar, analytics)
- File attachments (photos, videos, documents)
- Comments and discussions on experiments/reflections

### Data Validation

Implementations should validate:
- Dates: end_date must be after start_date
- Status transitions: planned → active → completed (one-way)
- Required fields: title, description, dates cannot be empty
- User references: created_by, responsible_team must be valid user IDs

---

## 🎯 Usage Examples

### Creating an Experiment

When a user creates an experiment, they would fill:
1. Basic info: title, description, hypothesis
2. Timeline: start_date, end_date
3. Team: responsible_team, required_resources
4. Metrics: success_criteria, metrics_tracked

### During an Experiment

As the experiment runs, the team updates:
- progress_updates array (weekly check-ins)
- data_collected array (metrics data)
- status field (planning → active)

### Creating a Reflection

After the experiment ends:
1. Analyze: what_worked, what_didnt_work, surprises
2. Document: results_achieved, qualitative_feedback
3. Learn: key_learnings, answered_questions
4. Recommend: should_continue, improvements
5. Link: Set experiment's reflection_id to this reflection's id

---

## 🔄 Future Considerations

### Potential Additions

- **Experiment Templates**: Pre-filled structures for common experiment types
- **Cost Tracking**: Budget and actual costs for experiments
- **Media Attachments**: Photos, videos, documents directly in the structure
- **Notifications**: Who gets notified when experiments start/end
- **Permissions**: Granular control over who can edit each field
- **Version History**: Track changes to experiments and reflections over time

### Analytics Fields

For platform-level insights:
- `experiment_type`: Category of experiment
- `success_rate`: Calculated from outcome_status
- `engagement_score`: Based on participant activity
- `replication_count`: How many times this was replicated by others

---

## 📚 Related Documentation

- [Workflow](workflow.md) - How experiments and reflections fit into the learning loop
- [User Roles](user-roles.md) - Who can create/edit experiments and reflections
- [Moderation](moderation.md) - Guidelines for appropriate experiment content

---

**Last Updated:** February 2026  
**Version:** 1.0  
**Status:** Proposed Data Structures